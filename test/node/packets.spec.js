'use strict'

/**
 * adonis-websocket-packet
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const pkg = require('../../package')
const packet = require(`../../${pkg.main}`)
const test = require('japa')

test.group('Packets', () => {
  test('make sure all codes exists', (assert) => {
    assert.deepEqual(packet.codes, {
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
    })
  })

  test('return false when packet has no t property', (assert) => {
    assert.isFalse(packet.isJoinPacket({ }))
  })

  test('return false when packet is undefined', (assert) => {
    assert.isFalse(packet.isJoinPacket())
  })

  test('return false when packet is not an object', (assert) => {
    assert.isFalse(packet.isJoinPacket(true))
  })

  test('return true when packet has a topic', (assert) => {
    assert.isTrue(packet.hasTopic({ d: { topic: 'foo' } }))
  })

  test('return false when packet has no topic', (assert) => {
    assert.isFalse(packet.hasTopic({ d: { } }))
  })

  test('return false when packet has no d property', (assert) => {
    assert.isFalse(packet.hasTopic({ }))
  })

  test('return false when packet is undefined', (assert) => {
    assert.isFalse(packet.hasTopic())
  })

  test('return false when packet is a number', (assert) => {
    assert.isFalse(packet.hasTopic(22))
  })

  test('return false when packet d is a number', (assert) => {
    assert.isFalse(packet.hasTopic({ d: 22 }))
  })
})

test.group('JOIN', () => {
  test('return true when packet is valid join packet', (assert) => {
    assert.isTrue(packet.isJoinPacket({ t: packet.codes.JOIN }))
  })

  test('return false when packet is not a valid join packet', (assert) => {
    assert.isFalse(packet.isJoinPacket({ t: packet.codes.JOIN_ERROR }))
  })

  test('create join packet', (assert) => {
    assert.deepEqual(packet.joinPacket('chat'), {
      t: packet.codes.JOIN,
      d: { topic: 'chat' }
    })
  })

  test('return error when topic is not defined', (assert) => {
    const fn = () => packet.joinPacket()
    assert.throw(fn, 'expected topic to be a valid string')
  })
})

test.group('LEAVE', () => {
  test('return true when packet is valid leave packet', (assert) => {
    assert.isTrue(packet.isLeavePacket({ t: packet.codes.LEAVE }))
  })

  test('return false when packet is not a valid leave packet', (assert) => {
    assert.isFalse(packet.isLeavePacket({ t: packet.codes.JOIN }))
  })

  test('create leave packet', (assert) => {
    assert.deepEqual(packet.leavePacket('chat'), {
      t: packet.codes.LEAVE,
      d: { topic: 'chat' }
    })
  })

  test('return error when topic is not defined', (assert) => {
    const fn = () => packet.leavePacket()
    assert.throw(fn, 'expected topic to be a valid string')
  })
})

test.group('OPEN', () => {
  test('return true when packet is valid open packet', (assert) => {
    assert.isTrue(packet.isOpenPacket({ t: packet.codes.OPEN }))
  })

  test('return false when packet is not a valid open packet', (assert) => {
    assert.isFalse(packet.isOpenPacket({ t: packet.codes.JOIN }))
  })
})

test.group('JOIN_ACK', () => {
  test('return true when packet is valid join ack packet', (assert) => {
    assert.isTrue(packet.isJoinAckPacket({ t: packet.codes.JOIN_ACK }))
  })

  test('return false when packet is not a valid join ack packet', (assert) => {
    assert.isFalse(packet.isJoinAckPacket({ t: packet.codes.JOIN }))
  })

  test('create join ack packet', (assert) => {
    assert.deepEqual(packet.joinAckPacket('chat'), {
      t: packet.codes.JOIN_ACK,
      d: { topic: 'chat' }
    })
  })

  test('return error when topic is not defined', (assert) => {
    const fn = () => packet.joinAckPacket()
    assert.throw(fn, 'expected topic to be a valid string')
  })
})

test.group('JOIN_ERROR', () => {
  test('return true when packet is valid join error packet', (assert) => {
    assert.isTrue(packet.isJoinErrorPacket({ t: packet.codes.JOIN_ERROR }))
  })

  test('return false when packet is not a valid join error packet', (assert) => {
    assert.isFalse(packet.isJoinErrorPacket({ t: packet.codes.JOIN }))
  })

  test('create join error packet', (assert) => {
    assert.deepEqual(packet.joinErrorPacket('chat', 'Cannot join channel'), {
      t: packet.codes.JOIN_ERROR,
      d: { topic: 'chat', message: 'Cannot join channel' }
    })
  })

  test('return error when topic is not defined', (assert) => {
    const fn = () => packet.joinErrorPacket()
    assert.throw(fn, 'expected topic to be a valid string')
  })

  test('return error when message is not defined', (assert) => {
    const fn = () => packet.joinErrorPacket('chat')
    assert.throw(fn, 'expected message to be a valid string')
  })
})

test.group('LEAVE_ACK', () => {
  test('return true when packet is valid leave ack packet', (assert) => {
    assert.isTrue(packet.isLeaveAckPacket({ t: packet.codes.LEAVE_ACK }))
  })

  test('return false when packet is not a valid leave ack packet', (assert) => {
    assert.isFalse(packet.isLeaveAckPacket({ t: packet.codes.JOIN }))
  })

  test('create leave ack packet', (assert) => {
    assert.deepEqual(packet.leaveAckPacket('chat'), {
      t: packet.codes.LEAVE_ACK,
      d: { topic: 'chat' }
    })
  })

  test('return error when topic is not defined', (assert) => {
    const fn = () => packet.leaveAckPacket()
    assert.throw(fn, 'expected topic to be a valid string')
  })
})

test.group('LEAVE_ERROR', () => {
  test('return true when packet is valid leave error packet', (assert) => {
    assert.isTrue(packet.isLeaveErrorPacket({ t: packet.codes.LEAVE_ERROR }))
  })

  test('return false when packet is not a valid leave ack packet', (assert) => {
    assert.isFalse(packet.isLeaveErrorPacket({ t: packet.codes.JOIN }))
  })

  test('create leave error packet', (assert) => {
    assert.deepEqual(packet.leaveErrorPacket('chat', 'Cannot leave channel'), {
      t: packet.codes.LEAVE_ERROR,
      d: { topic: 'chat', message: 'Cannot leave channel' }
    })
  })

  test('return error when topic is not defined', (assert) => {
    const fn = () => packet.leaveErrorPacket()
    assert.throw(fn, 'expected topic to be a valid string')
  })

  test('return error when message is not defined', (assert) => {
    const fn = () => packet.leaveErrorPacket('chat')
    assert.throw(fn, 'expected message to be a valid string')
  })
})

test.group('EVENT', () => {
  test('return true when packet is valid event packet', (assert) => {
    assert.isTrue(packet.isEventPacket({ t: packet.codes.EVENT }))
  })

  test('return false when packet is not a valid event packet', (assert) => {
    assert.isFalse(packet.isEventPacket({ t: packet.codes.JOIN }))
  })

  test('make event packet', (assert) => {
    assert.deepEqual(packet.eventPacket('chat', 'greeting', 'hello world'), {
      t: packet.codes.EVENT,
      d: { topic: 'chat', event: 'greeting', data: 'hello world' }
    })
  })

  test('throw error when event body doesnt have event property', (assert) => {
    const fn = () => packet.eventPacket('chat', null, 'hello world')
    assert.throw(fn, 'expected event to be a valid string')
  })

  test('set data property to empty string when its not defined', (assert) => {
    assert.deepEqual(packet.eventPacket('chat', 'greeting'), {
      t: packet.codes.EVENT,
      d: { topic: 'chat', event: 'greeting', data: '' }
    })
  })

  test('throw error when event topic is undefined', (assert) => {
    const fn = () => packet.eventPacket(null, '', 'hello world')
    assert.throw(fn, 'expected topic to be a valid string')
  })
})

test.group('PING', () => {
  test('return true when packet is valid ping packet', (assert) => {
    assert.isTrue(packet.isPingPacket({ t: packet.codes.PING }))
  })

  test('return false when packet is not a valid ping packet', (assert) => {
    assert.isFalse(packet.isPingPacket({ t: packet.codes.JOIN }))
  })

  test('make ping packet', (assert) => {
    assert.deepEqual(packet.pingPacket(), {
      t: packet.codes.PING
    })
  })
})

test.group('PONG', () => {
  test('return true when packet is valid pong packet', (assert) => {
    assert.isTrue(packet.isPongPacket({ t: packet.codes.PONG }))
  })

  test('return false when packet is not a valid pong packet', (assert) => {
    assert.isFalse(packet.isPongPacket({ t: packet.codes.JOIN }))
  })

  test('make pong packet', (assert) => {
    assert.deepEqual(packet.pongPacket(), {
      t: packet.codes.PONG
    })
  })
})
