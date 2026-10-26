import test from 'node:test';
import assert from 'node:assert/strict';
import { initialVenueConfig, venueSpaces, venueFacilities, galleryItems, visitSteps } from './venueData';

test('initial venue config contains required Katihar details', () => {
  assert.equal(initialVenueConfig.brandName, "ROYAL PALACE");
  assert.equal(initialVenueConfig.subtitle, "WEDDING LAWN & BANQUET");
  assert.ok(initialVenueConfig.location.includes("Katihar"));
  assert.equal(initialVenueConfig.phone, "+91 90000 12345");
});

test('venue spaces contain lawn, banquet, and reception areas', () => {
  assert.equal(venueSpaces.length, 3);
  const lawn = venueSpaces.find(s => s.id === 'wedding-lawn');
  const banquet = venueSpaces.find(s => s.id === 'banquet-hall');
  const reception = venueSpaces.find(s => s.id === 'reception-space');

  assert.ok(lawn);
  assert.ok(banquet);
  assert.ok(reception);

  assert.equal(lawn?.title, "The Wedding Lawn");
  assert.equal(banquet?.title, "The Grand Banquet Hall");
  assert.equal(reception?.title, "The Celebration & Dining Pavilion");
});

test('facilities list contains 6 primary amenities', () => {
  assert.equal(venueFacilities.length, 6);
  assert.ok(venueFacilities.some(f => f.title === "Spacious Event Areas"));
  assert.ok(venueFacilities.some(f => f.title === "Guest Parking"));
});

test('gallery dataset has valid categories and images', () => {
  assert.ok(galleryItems.length >= 8);
  const categories = new Set(galleryItems.map(g => g.category));
  assert.ok(categories.has('lawn'));
  assert.ok(categories.has('banquet'));
  assert.ok(categories.has('mandap'));
  assert.ok(categories.has('dining'));
});

test('visit steps follow sequential structure', () => {
  assert.equal(visitSteps.length, 3);
  assert.equal(visitSteps[0].step, '01');
  assert.equal(visitSteps[1].step, '02');
  assert.equal(visitSteps[2].step, '03');
});
