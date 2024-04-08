import { classNames } from 'shared/lib/classNames/classNames';

describe('classname helper tests', () => {
	test('test with common class', () =>{
		expect(classNames('class',{},[])).toBe('class');
	});

	test('test with additional class', () =>{
		expect(classNames('class',{},['add'])).toBe('class add');
	});

	test('test with mods', () =>{
		expect(classNames('class',{ 'test' : true, 'test2' : false },['add'])).toBe('class add test');
	});

	test('with mods2', () =>{
		expect(classNames('class',{ 'test' : true, 'test2' : 'false', 'test3' : undefined },['add'])).toBe('class add test test2');
	});

	test('with undefined additional class ', () =>{
		expect(classNames('class',{},[undefined])).toBe('class');
	});

	test('with empty string', () =>{
		expect(classNames('',{},[undefined])).toBe('');
	});

});