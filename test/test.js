const { expect, beforeEach } = require('@jest/globals');
const { SyncService } = require('../dist/index')

let syncService;
const CONFIGURATIONS_URL = 'http://localhost:3000/api/configurations';

describe('SyncService', () => {
	beforeEach(() => {
		syncService = new SyncService(CONFIGURATIONS_URL, {});
	});
	describe('.postFetchConfigurations', () => {
		describe('when the post call is 200', () => {
			it('should return true', async () => {
				expect(await syncService.postFetchConfigurations()).toEqual(true);
			});
		});
		describe('when the post call is not 200', () => {
			it('should return false', async () => {
				expect(await syncService.postFetchConfigurations()).toEqual(false);
			});
		});
	});
});
