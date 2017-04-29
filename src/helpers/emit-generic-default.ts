import {Container} from '../collections';
import {InterfaceDeclaration} from '../elements/declarations/interface';
import {Type} from '../elements/type';

export const emit_generic_default = (generic_default: Type | null, container: Container): string =>
  (generic_default === null) || !(container instanceof InterfaceDeclaration)
    ? ''
    : ` = ${generic_default._emit(container)}`;
