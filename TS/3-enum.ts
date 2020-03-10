enum Membership {
  Simple,
  Standard,
  Premium,
};

const membership = Membership.Standard;
console.log(membership); // 1
const membership2 = Membership[1]; // assignee the enum field name instead its index
console.log(membership2); // Standard

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
};

const social = SocialMedia.INSTAGRAM;
console.log(social) // INSTAGRAM

