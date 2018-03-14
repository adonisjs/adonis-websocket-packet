'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

/**
 * adonis-websocket-packet
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

/**
 * Packet codes. The actual packet will have the numbers
 *
 * @type {Object}
 *
 * @example
 * ```
 * {
 *  OPEN: 0,
 *  JOIN: 1,
 *  LEAVE: 2,
 *  JOIN_ACK: 3,
 *  JOIN_ERROR: 4,
 *  LEAVE_ACK: 5,
 *  LEAVE_ERROR: 6,
 *  EVENT: 7,
 *  PING: 8,
 *  PONG: 9
 * }
 * ```
 */

var codes = {
  OPEN: 0,
  JOIN: 1,
  LEAVE: 2,
  JOIN_ACK: 3,
  JOIN_ERROR: 4,
  LEAVE_ACK: 5,
  LEAVE_ERROR: 6,
  EVENT: 7,
  PING: 8,
  PONG: 9

  /**
   * Makes sure value is a string. Otherwise exception
   * is raised
   *
   * @method ensureString
   *
   * @param  {String}     input
   * @param  {String}     message
   *
   * @return {void}
   *
   * @private
   */
};function ensureString(input, message) {
  if (!input || typeof input !== 'string') {
    throw new Error(message);
  }
}

/**
 * Makes a packet, by ensuring all required properties
 * exists inside the `props` object
 *
 * @method makePacket
 *
 * @param  {Number}   code
 * @param  {Object}   props
 * @param  {Array}   requiredProps
 *
 * @return {Object}
 *
 * @private
 */
function makePacket(code, props, requiredProps) {
  requiredProps.forEach(function (rP) {
    ensureString(props[rP], 'expected ' + rP + ' to be a valid string');
  });
  return { t: code, d: props };
}

/**
 * Fns to be exported
 */
var fns = {};

/**
 * Validates if packet code is a `JOIN` code.
 *
 * @method isJoinPacket
 *
 * @param {Object} packet
 *
 * @return {Boolean}
 */

/**
 * Validates if packet code is a `LEAVE` code.
 *
 * @method isLeavePacket
 *
 * @param {Object} packet
 *
 * @return {Boolean}
 */

/**
 * Validates if packet code is a `OPEN` code.
 *
 * @method isOpenPacket
 *
 * @param {Object} packet
 *
 * @return {Boolean}
 */

/**
 * Validates if packet code is a `JOIN_ACK` code.
 *
 * @method isJoinAckPacket
 *
 * @param {Object} packet
 *
 * @return {Boolean}
 */

/**
 * Validates if packet code is a `JOIN_ERROR` code.
 *
 * @method isJoinErrorPacket
 *
 * @param {Object} packet
 *
 * @return {Boolean}
 */

/**
 * Validates if packet code is a `LEAVE_ACK` code.
 *
 * @method isLeaveAckPacket
 *
 * @param {Object} packet
 *
 * @return {Boolean}
 */

/**
 * Validates if packet code is a `LEAVE_ERROR` code.
 *
 * @method isLeaveErrorPacket
 *
 * @param {Object} packet
 *
 * @return {Boolean}
 */

/**
 * Validates if packet code is a `EVENT` code.
 *
 * @method isEventPacket
 *
 * @param {Object} packet
 *
 * @return {Boolean}
 */

/**
 * Validates if packet code is a `PING` code.
 *
 * @method isPingPacket
 *
 * @param {Object} packet
 *
 * @return {Boolean}
 */

/**
 * Validates if packet code is a `PONG` code.
 *
 * @method isPongPacket
 *
 * @param {Object} packet
 *
 * @return {Boolean}
 */

/**
 * Dynamically adding `if<Code>Packet` methods. Example
 *
 * `OPEN` will have `isOpenPacket` method
 * `LEAVE_ACK` will have `isLeaveAckPacket` method
 */
Object.keys(codes).forEach(function (name) {
  var fnName = name.toLowerCase().replace(/^\w|_(\w)/g, function (w, m) {
    return m ? m.toUpperCase() : w.toUpperCase();
  });
  fns['is' + fnName + 'Packet'] = function (packet) {
    return !!(packet && (typeof packet === 'undefined' ? 'undefined' : _typeof(packet)) === 'object' && packet.t === codes[name]);
  };
});

/**
 * Finding if a packet has a topic.
 *
 * @method hasTopic
 *
 * @param  {Object}  packet
 *
 * @return {Boolean}
 */
fns.hasTopic = function (packet) {
  return !!(packet && packet.d && packet.d.topic);
};

/**
 * Makes sure packet is a valid join packet. Do call `isJoinPacket`
 * before calling this method.
 *
 * @method isValidJoinPacket
 *
 * @type {Boolean}
 */
fns.isValidJoinPacket = fns.hasTopic;

/**
 * Makes sure packet is a valid leave packet. Do call `isLeavePacket`
 * before calling this method.
 *
 * @method isValidLeavePacket
 *
 * @type {Boolean}
 */
fns.isValidLeavePacket = fns.hasTopic;

/**
 * Makes sure packet is a valid event packet. Do call `isEventPacket`
 * before calling this method.
 *
 * @method isValidEventPacket
 *
 * @type {Boolean}
 */
fns.isValidEventPacket = fns.hasTopic;

/**
 * Makes a join packet
 *
 * @method joinPacket
 *
 * @param  {String}   topic
 *
 * @return {Object}
 *
 * @throws {Error} If topic is not defined or not a string
 */
fns.joinPacket = function (topic) {
  return makePacket(codes.JOIN, { topic: topic }, ['topic']);
};

/**
 * Makes a leave packet
 *
 * @method leavePacket
 *
 * @param  {String}    topic
 *
 * @return {Object}
 *
 * @throws {Error} If topic is not defined or not a string
 */
fns.leavePacket = function (topic) {
  return makePacket(codes.LEAVE, { topic: topic }, ['topic']);
};

/**
 * Makes join acknowledge packet
 *
 * @method joinAckPacket
 *
 * @param  {String}     topic
 *
 * @return {Object}
 *
 * @throws {Error} If topic is not defined or is not a string
 */
fns.joinAckPacket = function (topic) {
  return makePacket(codes.JOIN_ACK, { topic: topic }, ['topic']);
};

/**
 * Makes join error packet
 *
 * @method joinErrorPacket
 *
 * @param  {String}        topic
 * @param  {String}        message
 *
 * @return {Object}
 *
 * @throws {Error} If topic is not defined or not a string
 * @throws {Error} If message is not defined or not a string
 */
fns.joinErrorPacket = function (topic, message) {
  return makePacket(codes.JOIN_ERROR, { topic: topic, message: message }, ['topic', 'message']);
};

/**
 * Makes leave packet
 *
 * @method leaveAckPacket
 *
 * @param  {String}       topic
 *
 * @return {Object}
 *
 * @throws {Error} If topic is not defined or not a string
 */
fns.leaveAckPacket = function (topic) {
  return makePacket(codes.LEAVE_ACK, { topic: topic }, ['topic']);
};

/**
 * Makes leave error packet
 *
 * @method leaveErrorPacket
 *
 * @param  {String}         topic
 * @param  {String}         message
 *
 * @return {Object}
 *
 * @throws {Error} If topic is not defined or not a string
 * @throws {Error} If message is not defined or not a string
 */
fns.leaveErrorPacket = function (topic, message) {
  return makePacket(codes.LEAVE_ERROR, { topic: topic, message: message }, ['topic', 'message']);
};

/**
 * Makes the event packet
 *
 * @method eventPacket
 *
 * @param  {String}    topic
 * @param  {String}    event
 * @param  {Mixed}     data
 *
 * @return {Object}
 *
 * @throws {Error} If topic is not defined or not a string
 * @throws {Error} If event is not defined
 * @throws {Error} If data is not defined
 */
fns.eventPacket = function (topic, event, data) {
  data = data || '';
  return makePacket(codes.EVENT, { topic: topic, event: event, data: data }, ['topic', 'event']);
};

/**
 * Makes ping packet
 *
 * @method pingPacket
 *
 * @return {Object}
 */
fns.pingPacket = function () {
  return { t: codes.PING };
};

/**
 * Makes pong packet
 *
 * @method pongPacket
 *
 * @return {Object}
 */
fns.pongPacket = function () {
  return { t: codes.PONG };
};

var index = Object.assign({ codes: codes }, fns);

module.exports = index;
