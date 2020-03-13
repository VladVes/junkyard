
console.log('=======================NAMESPACES==================================');

/// <reference path="formNamespace.ts" />
namespace FormSpace {
  class MyForm {
    private type: FormType = 'inline';
    private state: FormState = 'active';

    constructor(public email: string) {

    }

    getInfo(): FromInfo {
      return {
        type: this.type,
        state: this.state,
      }
    }

  }

  const formA = new MyForm('mail@mail.ru');

  console.log('My form instance: ', formA)
}

