import * as migration_20250126_092725 from './20250126_092725';

export const migrations = [
  {
    up: migration_20250126_092725.up,
    down: migration_20250126_092725.down,
    name: '20250126_092725'
  },
];
