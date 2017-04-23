import { Declaration, IDeclarationOptionalParameters } from '../declaration';
import { indent } from '../helpers/indent';

export interface INamespaceOptionalParameters {
  declarations: Declaration<any, any>[];
}

export class Namespace extends Declaration<{}, INamespaceOptionalParameters> {

  public emit(): string {
    const jsdoc = this.emit_jsdoc();
    const content = this.parameters.declarations
      .map((declaration: Declaration<any, any>) => declaration.emit())
      .join('\n');
    return `${jsdoc}declare namespace {\n${indent(content)}}`;
  }

  public get default_parameters(): IDeclarationOptionalParameters & INamespaceOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      declarations: [],
    });
  }

}
