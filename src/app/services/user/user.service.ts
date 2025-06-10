// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://ca7a1cc1d8dec799c2ed.free.beeceptor.com/api/users';

  constructor(private http: HttpClient) {}

  // GET /api/users
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  // GET /api/users/:id
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  // POST /api/users
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  // PUT /api/users/:id
  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }

  // PATCH /api/users/:id
  patchUser(id: string, partialUser: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/${id}`, partialUser);
  }

  // DELETE /api/users/:id
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
