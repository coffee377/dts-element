import * as ts from 'typescript';
import {create_function_declaration} from '../declarations/function-declaration';
import {IGenericDeclaration} from '../declarations/generic-declaration';
import {IParameterDeclaration} from '../declarations/parameter-declaration';
import {create_object_member, IObjectMember} from '../members/object-member';
import {parse_native} from '../parse';
import {create_function_type} from '../types/function-type';
import {if_defined} from '../utils';

export const parse_call_signature = (node: ts.CallSignatureDeclaration): IObjectMember =>
  create_object_member({
    owned: create_function_declaration({
      name: undefined,
      type: create_function_type({
        generics: if_defined(node.typeParameters, generics => generics.map(parse_native) as IGenericDeclaration[]),
        parameters: if_defined(node.parameters, parameters => parameters.map(parse_native) as IParameterDeclaration[]),
        return: if_defined(node.type, parse_native),
      }),
    }),
  });
