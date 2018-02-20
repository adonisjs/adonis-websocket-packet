# Websocket packets

[![Greenkeeper badge](https://badges.greenkeeper.io/adonisjs/adonis-websocket-packet.svg)](https://greenkeeper.io/)
This library is used to create/validate the websocket packets used by AdonisJs. 

If you are writing a Javascript client, this is the library you must use. When writing client libraries for other platforms, simply follow the docs and the code to create your implementations.

```bash
npm i --save @adonisjs/websocket-packet
```

## Usage
```js
const wsp = require('@adonisjs/websocket-packet') 
console.log(wsp.codes)

wsp.isJoinPacket(packet)
```

## Constants

<dl>
<dt><a href="#codes">codes</a> : <code>Object</code></dt>
<dd><p>Packet codes. The actual packet will have the numbers</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#isJoinPacket">isJoinPacket(packet)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validates if packet code is a <code>JOIN</code> code.</p>
</dd>
<dt><a href="#isLeavePacket">isLeavePacket(packet)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validates if packet code is a <code>LEAVE</code> code.</p>
</dd>
<dt><a href="#isOpenPacket">isOpenPacket(packet)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validates if packet code is a <code>OPEN</code> code.</p>
</dd>
<dt><a href="#isJoinAckPacket">isJoinAckPacket(packet)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validates if packet code is a <code>JOIN_ACK</code> code.</p>
</dd>
<dt><a href="#isJoinErrorPacket">isJoinErrorPacket(packet)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validates if packet code is a <code>JOIN_ERROR</code> code.</p>
</dd>
<dt><a href="#isLeaveAckPacket">isLeaveAckPacket(packet)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validates if packet code is a <code>LEAVE_ACK</code> code.</p>
</dd>
<dt><a href="#isLeaveErrorPacket">isLeaveErrorPacket(packet)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validates if packet code is a <code>LEAVE_ERROR</code> code.</p>
</dd>
<dt><a href="#isEventPacket">isEventPacket(packet)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validates if packet code is a <code>EVENT</code> code.</p>
</dd>
<dt><a href="#isPingPacket">isPingPacket(packet)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validates if packet code is a <code>PING</code> code.</p>
</dd>
<dt><a href="#isPongPacket">isPongPacket(packet)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validates if packet code is a <code>PONG</code> code.</p>
</dd>
<dt><a href="#hasTopic">hasTopic(packet)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Finding if a packet has a topic.</p>
</dd>
<dt><a href="#isValidJoinPacket">isValidJoinPacket()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Makes sure packet is a valid join packet. Do call <code>isJoinPacket</code>
before calling this method.</p>
</dd>
<dt><a href="#isValidLeavePacket">isValidLeavePacket()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Makes sure packet is a valid leave packet. Do call <code>isLeavePacket</code>
before calling this method.</p>
</dd>
<dt><a href="#isValidEventPacket">isValidEventPacket()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Makes sure packet is a valid event packet. Do call <code>isEventPacket</code>
before calling this method.</p>
</dd>
<dt><a href="#joinPacket">joinPacket(topic)</a> ⇒ <code>Object</code></dt>
<dd><p>Makes a join packet</p>
</dd>
<dt><a href="#leavePacket">leavePacket(topic)</a> ⇒ <code>Object</code></dt>
<dd><p>Makes a leave packet</p>
</dd>
<dt><a href="#joinAckPacket">joinAckPacket(topic)</a> ⇒ <code>Object</code></dt>
<dd><p>Makes join acknowledge packet</p>
</dd>
<dt><a href="#joinErrorPacket">joinErrorPacket(topic, message)</a> ⇒ <code>Object</code></dt>
<dd><p>Makes join error packet</p>
</dd>
<dt><a href="#leaveAckPacket">leaveAckPacket(topic)</a> ⇒ <code>Object</code></dt>
<dd><p>Makes leave packet</p>
</dd>
<dt><a href="#leaveErrorPacket">leaveErrorPacket(topic, message)</a> ⇒ <code>Object</code></dt>
<dd><p>Makes leave error packet</p>
</dd>
<dt><a href="#eventPacket">eventPacket(topic, body)</a> ⇒ <code>Object</code></dt>
<dd><p>Makes the event packet</p>
</dd>
<dt><a href="#pingPacket">pingPacket()</a> ⇒ <code>Object</code></dt>
<dd><p>Makes ping packet</p>
</dd>
<dt><a href="#pongPacket">pongPacket()</a> ⇒ <code>Object</code></dt>
<dd><p>Makes pong packet</p>
</dd>
</dl>

<a name="codes"></a>

## codes : <code>Object</code>
Packet codes. The actual packet will have the numbers

**Kind**: global constant  
**Example**  
```
{
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

}
```
<a name="isJoinPacket"></a>

## isJoinPacket(packet) ⇒ <code>Boolean</code>
Validates if packet code is a `JOIN` code.

**Kind**: global function  

| Param | Type |
| --- | --- |
| packet | <code>Object</code> | 

<a name="isLeavePacket"></a>

## isLeavePacket(packet) ⇒ <code>Boolean</code>
Validates if packet code is a `LEAVE` code.

**Kind**: global function  

| Param | Type |
| --- | --- |
| packet | <code>Object</code> | 

<a name="isOpenPacket"></a>

## isOpenPacket(packet) ⇒ <code>Boolean</code>
Validates if packet code is a `OPEN` code.

**Kind**: global function  

| Param | Type |
| --- | --- |
| packet | <code>Object</code> | 

<a name="isJoinAckPacket"></a>

## isJoinAckPacket(packet) ⇒ <code>Boolean</code>
Validates if packet code is a `JOIN_ACK` code.

**Kind**: global function  

| Param | Type |
| --- | --- |
| packet | <code>Object</code> | 

<a name="isJoinErrorPacket"></a>

## isJoinErrorPacket(packet) ⇒ <code>Boolean</code>
Validates if packet code is a `JOIN_ERROR` code.

**Kind**: global function  

| Param | Type |
| --- | --- |
| packet | <code>Object</code> | 

<a name="isLeaveAckPacket"></a>

## isLeaveAckPacket(packet) ⇒ <code>Boolean</code>
Validates if packet code is a `LEAVE_ACK` code.

**Kind**: global function  

| Param | Type |
| --- | --- |
| packet | <code>Object</code> | 

<a name="isLeaveErrorPacket"></a>

## isLeaveErrorPacket(packet) ⇒ <code>Boolean</code>
Validates if packet code is a `LEAVE_ERROR` code.

**Kind**: global function  

| Param | Type |
| --- | --- |
| packet | <code>Object</code> | 

<a name="isEventPacket"></a>

## isEventPacket(packet) ⇒ <code>Boolean</code>
Validates if packet code is a `EVENT` code.

**Kind**: global function  

| Param | Type |
| --- | --- |
| packet | <code>Object</code> | 

<a name="isPingPacket"></a>

## isPingPacket(packet) ⇒ <code>Boolean</code>
Validates if packet code is a `PING` code.

**Kind**: global function  

| Param | Type |
| --- | --- |
| packet | <code>Object</code> | 

<a name="isPongPacket"></a>

## isPongPacket(packet) ⇒ <code>Boolean</code>
Validates if packet code is a `PONG` code.

**Kind**: global function  

| Param | Type |
| --- | --- |
| packet | <code>Object</code> | 

<a name="hasTopic"></a>

## hasTopic(packet) ⇒ <code>Boolean</code>
Finding if a packet has a topic.

**Kind**: global function  

| Param | Type |
| --- | --- |
| packet | <code>Object</code> | 

<a name="isValidJoinPacket"></a>

## isValidJoinPacket() ⇒ <code>Boolean</code>
Makes sure packet is a valid join packet. Do call `isJoinPacket`
before calling this method.

**Kind**: global function  
<a name="isValidLeavePacket"></a>

## isValidLeavePacket() ⇒ <code>Boolean</code>
Makes sure packet is a valid leave packet. Do call `isLeavePacket`
before calling this method.

**Kind**: global function  
<a name="isValidEventPacket"></a>

## isValidEventPacket() ⇒ <code>Boolean</code>
Makes sure packet is a valid event packet. Do call `isEventPacket`
before calling this method.

**Kind**: global function  
<a name="joinPacket"></a>

## joinPacket(topic) ⇒ <code>Object</code>
Makes a join packet

**Kind**: global function  
**Throws**:

- <code>Error</code> If topic is not defined or not a string


| Param | Type |
| --- | --- |
| topic | <code>String</code> | 

<a name="leavePacket"></a>

## leavePacket(topic) ⇒ <code>Object</code>
Makes a leave packet

**Kind**: global function  
**Throws**:

- <code>Error</code> If topic is not defined or not a string


| Param | Type |
| --- | --- |
| topic | <code>String</code> | 

<a name="joinAckPacket"></a>

## joinAckPacket(topic) ⇒ <code>Object</code>
Makes join acknowledge packet

**Kind**: global function  
**Throws**:

- <code>Error</code> If topic is not defined or is not a string


| Param | Type |
| --- | --- |
| topic | <code>String</code> | 

<a name="joinErrorPacket"></a>

## joinErrorPacket(topic, message) ⇒ <code>Object</code>
Makes join error packet

**Kind**: global function  
**Throws**:

- <code>Error</code> If topic is not defined or not a string
- <code>Error</code> If message is not defined or not a string


| Param | Type |
| --- | --- |
| topic | <code>String</code> | 
| message | <code>String</code> | 

<a name="leaveAckPacket"></a>

## leaveAckPacket(topic) ⇒ <code>Object</code>
Makes leave packet

**Kind**: global function  
**Throws**:

- <code>Error</code> If topic is not defined or not a string


| Param | Type |
| --- | --- |
| topic | <code>String</code> | 

<a name="leaveErrorPacket"></a>

## leaveErrorPacket(topic, message) ⇒ <code>Object</code>
Makes leave error packet

**Kind**: global function  
**Throws**:

- <code>Error</code> If topic is not defined or not a string
- <code>Error</code> If message is not defined or not a string


| Param | Type |
| --- | --- |
| topic | <code>String</code> | 
| message | <code>String</code> | 

<a name="eventPacket"></a>

## eventPacket(topic, body) ⇒ <code>Object</code>
Makes the event packet

**Kind**: global function  
**Throws**:

- <code>Error</code> If topic is not defined or not a string
- <code>Error</code> If body.event is not defined
- <code>Error</code> If body.data is not defined


| Param | Type |
| --- | --- |
| topic | <code>String</code> | 
| body | <code>Object</code> | 

<a name="pingPacket"></a>

## pingPacket() ⇒ <code>Object</code>
Makes ping packet

**Kind**: global function  
<a name="pongPacket"></a>

## pongPacket() ⇒ <code>Object</code>
Makes pong packet

**Kind**: global function  
