(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wsp"] = factory();
	else
		root["adonis"] = root["adonis"] || {}, root["adonis"]["wsp"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * adonis-websocket-packet\n *\n * (c) Harminder Virk <virk@adonisjs.com>\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n*/\n\n/**\n * Packet codes. The actual packet will have the numbers\n *\n * @type {Object}\n *\n * @example\n * ```\n * {\n *  OPEN: 0,\n *  JOIN: 1,\n *  LEAVE: 2,\n *  JOIN_ACK: 3,\n *  JOIN_ERROR: 4,\n *  LEAVE_ACK: 5,\n *  LEAVE_ERROR: 6,\n *  EVENT: 7,\n *  PING: 8,\n *  PONG: 9\n * }\n * ```\n */\nconst codes = {\n  OPEN: 0,\n  JOIN: 1,\n  LEAVE: 2,\n  JOIN_ACK: 3,\n  JOIN_ERROR: 4,\n  LEAVE_ACK: 5,\n  LEAVE_ERROR: 6,\n  EVENT: 7,\n  PING: 8,\n  PONG: 9\n}\n\n/**\n * Makes sure value is a string. Otherwise exception\n * is raised\n *\n * @method ensureString\n *\n * @param  {String}     input\n * @param  {String}     message\n *\n * @return {void}\n *\n * @private\n */\nfunction ensureString (input, message) {\n  if (!input || typeof (input) !== 'string') {\n    throw new Error(message)\n  }\n}\n\n/**\n * Makes a packet, by ensuring all required properties\n * exists inside the `props` object\n *\n * @method makePacket\n *\n * @param  {Number}   code\n * @param  {Object}   props\n * @param  {Array}   requiredProps\n *\n * @return {Object}\n *\n * @private\n */\nfunction makePacket (code, props, requiredProps) {\n  requiredProps.forEach((rP) => {\n    ensureString(props[rP], `expected ${rP} to be a valid string`)\n  })\n  return { t: code, d: props }\n}\n\n/**\n * Fns to be exported\n */\nconst fns = {}\n\n/**\n * Validates if packet code is a `JOIN` code.\n *\n * @method isJoinPacket\n *\n * @param {Object} packet\n *\n * @return {Boolean}\n */\n\n/**\n * Validates if packet code is a `LEAVE` code.\n *\n * @method isLeavePacket\n *\n * @param {Object} packet\n *\n * @return {Boolean}\n */\n\n/**\n * Validates if packet code is a `OPEN` code.\n *\n * @method isOpenPacket\n *\n * @param {Object} packet\n *\n * @return {Boolean}\n */\n\n/**\n * Validates if packet code is a `JOIN_ACK` code.\n *\n * @method isJoinAckPacket\n *\n * @param {Object} packet\n *\n * @return {Boolean}\n */\n\n/**\n * Validates if packet code is a `JOIN_ERROR` code.\n *\n * @method isJoinErrorPacket\n *\n * @param {Object} packet\n *\n * @return {Boolean}\n */\n\n/**\n * Validates if packet code is a `LEAVE_ACK` code.\n *\n * @method isLeaveAckPacket\n *\n * @param {Object} packet\n *\n * @return {Boolean}\n */\n\n/**\n * Validates if packet code is a `LEAVE_ERROR` code.\n *\n * @method isLeaveErrorPacket\n *\n * @param {Object} packet\n *\n * @return {Boolean}\n */\n\n/**\n * Validates if packet code is a `EVENT` code.\n *\n * @method isEventPacket\n *\n * @param {Object} packet\n *\n * @return {Boolean}\n */\n\n/**\n * Validates if packet code is a `PING` code.\n *\n * @method isPingPacket\n *\n * @param {Object} packet\n *\n * @return {Boolean}\n */\n\n/**\n * Validates if packet code is a `PONG` code.\n *\n * @method isPongPacket\n *\n * @param {Object} packet\n *\n * @return {Boolean}\n */\n\n/**\n * Dynamically adding `if<Code>Packet` methods. Example\n *\n * `OPEN` will have `isOpenPacket` method\n * `LEAVE_ACK` will have `isLeaveAckPacket` method\n */\nObject.keys(codes).forEach((name) => {\n  const fnName = name.toLowerCase().replace(/^\\w|_(\\w)/g, (w, m) => m ? m.toUpperCase() : w.toUpperCase())\n  fns[`is${fnName}Packet`] = (packet) => !!(packet && typeof (packet) === 'object' && packet.t === codes[name])\n})\n\n/**\n * Finding if a packet has a topic.\n *\n * @method hasTopic\n *\n * @param  {Object}  packet\n *\n * @return {Boolean}\n */\nfns.hasTopic = function (packet) {\n  return !!(packet && packet.d && packet.d.topic)\n}\n\n/**\n * Makes sure packet is a valid join packet. Do call `isJoinPacket`\n * before calling this method.\n *\n * @method isValidJoinPacket\n *\n * @type {Boolean}\n */\nfns.isValidJoinPacket = fns.hasTopic\n\n/**\n * Makes sure packet is a valid leave packet. Do call `isLeavePacket`\n * before calling this method.\n *\n * @method isValidLeavePacket\n *\n * @type {Boolean}\n */\nfns.isValidLeavePacket = fns.hasTopic\n\n/**\n * Makes sure packet is a valid event packet. Do call `isEventPacket`\n * before calling this method.\n *\n * @method isValidEventPacket\n *\n * @type {Boolean}\n */\nfns.isValidEventPacket = fns.hasTopic\n\n/**\n * Makes a join packet\n *\n * @method joinPacket\n *\n * @param  {String}   topic\n *\n * @return {Object}\n *\n * @throws {Error} If topic is not defined or not a string\n */\nfns.joinPacket = function (topic) {\n  return makePacket(codes.JOIN, { topic }, ['topic'])\n}\n\n/**\n * Makes a leave packet\n *\n * @method leavePacket\n *\n * @param  {String}    topic\n *\n * @return {Object}\n *\n * @throws {Error} If topic is not defined or not a string\n */\nfns.leavePacket = function (topic) {\n  return makePacket(codes.LEAVE, { topic }, ['topic'])\n}\n\n/**\n * Makes join acknowledge packet\n *\n * @method joinAckPacket\n *\n * @param  {String}     topic\n *\n * @return {Object}\n *\n * @throws {Error} If topic is not defined or is not a string\n */\nfns.joinAckPacket = function (topic) {\n  return makePacket(codes.JOIN_ACK, { topic }, ['topic'])\n}\n\n/**\n * Makes join error packet\n *\n * @method joinErrorPacket\n *\n * @param  {String}        topic\n * @param  {String}        message\n *\n * @return {Object}\n *\n * @throws {Error} If topic is not defined or not a string\n * @throws {Error} If message is not defined or not a string\n */\nfns.joinErrorPacket = function (topic, message) {\n  return makePacket(codes.JOIN_ERROR, { topic, message }, ['topic', 'message'])\n}\n\n/**\n * Makes leave packet\n *\n * @method leaveAckPacket\n *\n * @param  {String}       topic\n *\n * @return {Object}\n *\n * @throws {Error} If topic is not defined or not a string\n */\nfns.leaveAckPacket = function (topic) {\n  return makePacket(codes.LEAVE_ACK, { topic }, ['topic'])\n}\n\n/**\n * Makes leave error packet\n *\n * @method leaveErrorPacket\n *\n * @param  {String}         topic\n * @param  {String}         message\n *\n * @return {Object}\n *\n * @throws {Error} If topic is not defined or not a string\n * @throws {Error} If message is not defined or not a string\n */\nfns.leaveErrorPacket = function (topic, message) {\n  return makePacket(codes.LEAVE_ERROR, { topic, message }, ['topic', 'message'])\n}\n\n/**\n * Makes the event packet\n *\n * @method eventPacket\n *\n * @param  {String}    topic\n * @param  {Object}    body\n *\n * @return {Object}\n *\n * @throws {Error} If topic is not defined or not a string\n * @throws {Error} If body.event is not defined\n * @throws {Error} If body.data is not defined\n */\nfns.eventPacket = function (topic, body) {\n  if (!body || typeof (body) !== 'object' || !body.event || !body.data) {\n    throw new Error('event body must have event and data property')\n  }\n  return makePacket(codes.EVENT, { topic, body }, ['topic'])\n}\n\n/**\n * Makes ping packet\n *\n * @method pingPacket\n *\n * @return {Object}\n */\nfns.pingPacket = function () {\n  return { t: codes.PING }\n}\n\n/**\n * Makes pong packet\n *\n * @method pongPacket\n *\n * @return {Object}\n */\nfns.pongPacket = function () {\n  return { t: codes.PONG }\n}\n\nmodule.exports = Object.assign({ codes }, fns)\n\n\n//# sourceURL=webpack://adonis,wsp/./index.js?");

/***/ })

/******/ });
});
