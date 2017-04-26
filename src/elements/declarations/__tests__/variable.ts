jest.unmock('../variable');

import {BasicType} from '../../types/basic';
import {VariableDeclaration} from '../variable';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'A';
    const kind = 'const';
    const type_name = 'B';
    const type = new BasicType({name: type_name});
    const variable = new VariableDeclaration({name, kind, type});
    expect(variable.emit()).toMatchSnapshot();
  });
});