/**
 * Client name - Soft Landing
 *
 * Changelog:
 * year/month/day - Author - description
 */

import { create } from 'lemonpi-soft-landing-helper';

create({
  // Required fields, retrieve these IDs from ODC Manage
  templateId: 0,
  adsetId: 0,

  // Content fields as defined in ODC Manage
  content: {
    example1: (value) => {
      document.querySelector('#example1').textContent = value;
    },
    example2: (value) => {
      document.querySelector('#example2').textContent = value;
    },
  },
});
