import { coordsFor } from '../src/locationMap';
import assert from 'node:assert/strict';
import test from 'node:test';

test('coordsFor returns coordinates for known location', () => {
  const c = coordsFor('Las Vegas, NV');
  assert.ok(c);
  assert.equal(Math.round(c!.lat), 36);
});
