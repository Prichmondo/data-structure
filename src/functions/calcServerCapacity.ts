export function maxCapacity(cores: number, avgTimeResponse: number): number {
  return cores/avgTimeResponse;
}

export function maxUsers(cores: number, avgTimeResponse: number, clickFrequency: number): number {
  return maxCapacity(cores, avgTimeResponse) * 60 * clickFrequency;
}

export function numberOfServers(cores: number, avgTimeResponse: number, clickFrequency: number, simultaneousUsers: number): number {
  const simultaneousUsersPerMachine = maxUsers(cores, avgTimeResponse, clickFrequency);
  return Math.floor(simultaneousUsers/simultaneousUsersPerMachine);
}