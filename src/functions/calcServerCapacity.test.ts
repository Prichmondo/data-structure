import { numberOfServers } from './calcServerCapacity';

it('can cal number of server needed', () => {
  const coresPerMachine = 4;
  const averageTimePerRequest = 0.4; //in seconds
  const usersClickFrequency = 30; //1 click every 30 seconds
  const maxSimultaneousUsers = 45000; //1 click every 30 seconds
  const result = numberOfServers(coresPerMachine, averageTimePerRequest, usersClickFrequency, maxSimultaneousUsers);
  expect(result).toBe(2);
});