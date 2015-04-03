/**
 * flyandi:is library for Meteor
 * @version: v1.0.2
 * @author: Andy Schwarz
 *
 * Created by Andy Schwarz. Please report any bug at http://github.com/flyandi/meteor-is
 *
 * Copyright (c) 2015 Andy Schwarz http://github.com/flyandi
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


/** 
  * ::is
  */

Is = {

	_version: '1.0.2',

	undefined: 'undefined',

	__toString: function() {
		return Object.prototype.toString.call(arguments[0]);
	},

	/** (iterable) */
	iterable: function() {
		return this.object(arguments[0]) || this.array(arguments[0]);
	},

	/** (fn) */
	fn: function() {
		return typeof(arguments[0]) == "function";
	},

	/** (object) */
	object: function() {
		return typeof(arguments[0]) == "object";
	},

	/** (array) */
	array: function() {
		return this.__toString(arguments[0]) === '[object Array]';
	},

	/** (date) */
	date: function() {
		return this.__toString(arguments[0])  === '[object Date]';
	},

	/** (string) */
	string: function() {
		return typeof(arguments[0]) == "string";
	},

	/** (number) */
	number: function() {
		return typeof(arguments[0]) == "number";
	},

	/** (boolean) */
	boolean: function() {
		return typeof(arguments[0]) == "boolean";
	},

	/** (defined) */
	defined: function() {
		return typeof(arguments[0]) != Is.undefined;
	},

	/** (element) */
	element: function() {
		return typeof(HTMLElement) !== Is.undefined ? (arguments[0] instanceof HTMLElement) : (arguments[0] && arguments[0].nodeType === 1);
	},

	/** (empty) */
	empty: function(o) {
		switch(true) {
			case Is.array(o) || Is.string(o): 
				return o.length === 0; 

			case Is.object(o): 
				var s = 0;
				for(var key in o) 
					if(o.hasOwnProperty(key)) s++;
				return s === 0;
		
			case Is.boolean(o):
				return o === false;

			default:
				return !o;
		}
	},

	/** (same) */
	same: function(a, b) {
		return a == b;
	},

};


/** (regular expression filters) */

(function() {

	var regexps = {
		url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
		email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
		creditcard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
		alphanumeric: /^[A-Za-z0-9]+$/,
		time: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
		datestring: /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,
		zip: /^[0-9]{5}(?:-[0-9]{4})?$/,
		phone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
		ssn: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
		affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
		hexadecimal: /^[0-9a-fA-F]+$/,
		hexcolor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
	};

	var __is__createregex = function(regexp, regexps) {
        Is[regexp] = function(value) {
            return regexps[regexp].test(value);
        };
    }

    // create regexp checks methods from 'regexp' object
    for(var regexp in regexps) {
        if(regexps.hasOwnProperty(regexp)) {
            __is__createregex(regexp, regexps);
        }
    }

   
}());


