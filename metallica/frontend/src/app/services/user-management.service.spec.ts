import { TestBed, inject } from '@angular/core/testing';
import { UserManagementService } from './user-management.service';


describe('HttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserManagementService]
    });
  });

  it('should be created', inject([UserManagementService], (service: UserManagementService) => {
    expect(service).toBeTruthy();
  }));
});
