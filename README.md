# User CRUD REST API

REST API sederhana untuk crud pengguna (User), menggunakan **Node.js**, **Express**, dan **JSON file** sebagai database sementara.
API ini menggunakan **Clean Architecture**: Repository → Service → Controller, dengan validasi input dan response JSON yang rapi.

---

## Fitur

- Tambah user baru (`POST /users`)
- Ambil semua user (`GET /users`)
- Ambil user berdasarkan ID (`GET /users/:id`)
- Update user (`PATCH /users/:id`)
- Hapus user (`DELETE /users/:id`)
- Validasi input:
  - Semua field wajib diisi saat create
  - Email harus berisi `@` dan tidak boleh kosong
  - Panjang nama ≤ 100 karakter
  - Panjang username ≤ 50 karakter
  - Panjang alamat ≤ 200 karakter
- Response JSON konsisten dengan `success`, `message`, dan `data`

---

## Struktur Folder

```yaml
src/
├─ controllers/
│ └─ user.controller.js
├─ services/
│ └─ user.service.js
├─ repositories/
│ └─ user.repository.js
├─ data/
│ ├─ data-handler.js
│ └─ users.json
├─ utils/
│ ├─ validator.js
│ └─ response.js
├─ routes/
│ └─ user.route.js
└─ app.js
```

## Endpoints / Routes

### 1. GET /users

Ambil semua user.

**Response sukses (200):**

```json
{
  "success": true,
  "message": "Users fetched successfully",
  "data": [
    {
      "id": "uuid",
      "name": "Budi Santoso",
      "username": "budisantoso",
      "email": "budi@example.com",
      "address": "Jl. Merpati No.12, Jakarta",
      "createdAt": "2025-10-17T01:45:23.456Z",
      "updatedAt": "2025-10-17T01:45:23.456Z"
    }
  ]
}
```

### 2. GET /users/:id

Ambil user berdasarkan ID.

**Response sukses (200):**

```json
{
  "success": true,
  "message": "User fetched successfully",
  "data": { "...user" }
}
```

**Response error (404):**

```json
{
  "success": false,
  "message": "User not found"
}
```

### 3. POST /users

Tambah user baru.

**Request body:**

```json
{
  "name": "Budi Santoso",
  "username": "budisantoso",
  "email": "budi@example.com",
  "address": "Jl. Merpati No.12, Jakarta"
}
```

**Response sukses (200):**

```json
{
  "success": true,
  "message": "User created successfully",
  "data": { "...user" }
}
```

### 4. PATCH /users/:id

Update user.

**Request body (update sebagian field diperbolehkan):**

```json
{
  "name": "Budi Santoso Jr.",
  "email": "budi.jr@example.com"
}
```

**Response sukses (200):**

```json
{
  "success": true,
  "message": "User updated successfully",
  "data": { "...user" }
}
```

### 5. DELETE /users/:id

Hapus user berdasarkan ID.

**Response sukses (200):**

```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": null
}
```

---

## Contoh users.json

```json
[
  {
    "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "name": "Budi Santoso",
    "username": "budisantoso",
    "email": "budi@example.com",
    "address": "Jl. Merpati No.12, Jakarta",
    "createdAt": "2025-10-17T01:45:23.456Z",
    "updatedAt": "2025-10-17T01:45:23.456Z"
  }
]
```
