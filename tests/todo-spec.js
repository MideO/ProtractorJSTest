'use strict';

var AngularPage = require('./pageObject/angular_page.js');
global.angularPage = new AngularPage();
var pageObject;


describe('angularJs homepage ', function () {
    describe('Greetings section', function () {
        it('should greet the user', function () {
            pageObject = angularPage.getAngularOPage();
            pageObject.typeName('Bob');
            expect(pageObject.greeting).toEqual('Hello Bob!')
        });
    });

    describe('Todo list section', function () {
        it('should add a todo', function () {
            pageObject = angularPage.getAngularOPage();
            pageObject.addTodo('write a protractor test');
            expect(pageObject.todoList.count()).toEqual(3);
        });
    });

    describe('Todo list section', function () {
        it('should list todos', function () {
            pageObject = angularPage.getAngularOPage();
            expect(pageObject.todoList.count()).toEqual(2);
            expect(pageObject.todoAt(1)).toEqual('build an angular app');
        });
    });
});