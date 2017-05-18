import * as declarations from './declarations/index';
import * as types from './types/index';

export type IRootMember =
  | declarations.IClassDeclaration
  | declarations.IEnumDeclaration
  | declarations.IFunctionDeclaration
  | declarations.IInterfaceDeclaration
  | declarations.IModuleDeclaration
  | declarations.INamespaceDeclaration
  | declarations.ITypeDeclaration
  | declarations.IVariableDeclaration
;

export type IDeclaration =
  | declarations.IClassDeclaration
  | declarations.IEnumDeclaration
  | declarations.IFunctionDeclaration
  | declarations.IGenericDeclaration
  | declarations.IInterfaceDeclaration
  | declarations.IModuleDeclaration
  | declarations.INamespaceDeclaration
  | declarations.IParameterDeclaration
  | declarations.ITypeDeclaration
  | declarations.IVariableDeclaration
;

export type IType =
  | types.IArrayType
  | types.IBasicType
  | types.IClassType
  | types.IConstructorType
  | types.IEnumType
  | types.IFunctionType
  | types.IGenericType
  | types.IInterfaceType
  | types.IIntersectionType
  | types.IKeyofType
  | types.ILiteralType
  | types.INativeType
  | types.IObjectType
  | types.ITupleType
  | types.ITypedType
  | types.ITypeofType
  | types.IUnionType
;
