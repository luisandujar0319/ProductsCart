import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoading: boolean = false;
  constructor() { }

  getLoadingService(): boolean {
    return this.isLoading;
  }
  show(): void {
    this.isLoading = true;;
  }
  hide(): void {
    this.isLoading = false;
  }
}
