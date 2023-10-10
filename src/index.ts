// *! Single Responsibility Principle

// class Producto {
//   constructor(private nombre: string, private precio: number) {}

//   getNombre(): string {
//     return this.nombre;
//   }

//   getPrecio(): number {
//     return this.precio;
//   }
// }

// class Descuento {
//   constructor(private producto: Producto) {}

//   aplicarDescuento(descuento: number): number {
//     return this.producto.getPrecio() - descuento;
//   }
// }


// *! Open Closed Principle

// interface IDescuento {
//     aplicar(precio: number): number;
// }

// class DescuentoFijo implements IDescuento {
//     constructor(private descuento: number) {}

//     aplicar(precio: number): number {
//         return precio - this.descuento;
//     }
// }

// class DescuentoPorcentaje implements IDescuento {
//     constructor(private porcentaje: number) {}

//     aplicar(precio: number): number {
//         return precio - (precio * (this.porcentaje / 100));
//     }
// }

// class Producto {
//     constructor(
//         private nombre: string,
//         private precio: number,
//         private descuento: IDescuento
//     ) {}

//     getNombre(): string {
//         return this.nombre;
//     }

//     getPrecio(): number {
//         return this.precio;
//     }

//     getPrecioConDescuento(): number {
//         return this.descuento.aplicar(this.precio);
//     }
// }

// // Ejemplo de uso
// const descuentoFijo = new DescuentoFijo(10);
// const productoConDescuentoFijo = new Producto('Producto 1', 100, descuentoFijo);
// console.log(productoConDescuentoFijo.getPrecioConDescuento()); // Debería imprimir 90

// const descuentoPorcentaje = new DescuentoPorcentaje(10);
// const productoConDescuentoPorcentaje = new Producto('Producto 2', 100, descuentoPorcentaje);
// console.log(productoConDescuentoPorcentaje.getPrecioConDescuento()); // Debería imprimir 90


// *! Liskov Substitution Principle

// interface IUserProvider {
//     getUsers(): any[];
// }

// const users = [{
//     name: 'John',
//     lastname: 'Doe',
//     email: 'example@gmail.com'
// }];

// class UsersMySQL implements IUserProvider {
//     getUsers(): any[] {
//         return users;
//     }
// }

// class UsersMongo implements IUserProvider {
//     getUsers(): any[] {
//         return users;
//     }
// }

// class UsersPostgreSQL implements IUserProvider {
//     getUsers(): any[] {
//         return users;
//     }
// }

// function getUsers(provider: IUserProvider): any[] {
//     return provider.getUsers();
// }

// // Ejemplo de uso
// const mysqlUsers = new UsersMySQL();
// console.log(getUsers(mysqlUsers));

// const mongoUsers = new UsersMongo();
// console.log(getUsers(mongoUsers));

// const postgresUsers = new UsersPostgreSQL();
// console.log(getUsers(postgresUsers));


// *! Interface Segregation Principle

// interface Comedor {
//     comer(): void;
// }

// interface Volador {
//     volar(): void;
// }

// interface Nadador {
//     nadar(): void;
// }

// class Perro implements Comedor, Nadador {
//     comer(): void {
//         console.log('El perro está comiendo');
//     }

//     nadar(): void {
//         console.log('El perro está nadando');
//     }
// }

// class Paloma implements Comedor, Volador {
//     comer(): void {
//         console.log('La paloma está comiendo');
//     }

//     volar(): void {
//         console.log('La paloma está volando');
//     }
// }

// // Crear instancias y llamar a los métodos para probar
// const miPerro = new Perro();
// miPerro.comer();
// miPerro.nadar();

// const miPaloma = new Paloma();
// miPaloma.comer();
// miPaloma.volar();


// *! Dependency Inversion Principle

// interface IDatabase {
//     query(query: string): any[];
// }

// class MySQL implements IDatabase {
//     private connection: any;

//     constructor() {
//         // Conexión a MySQL
//     }

//     public query(query: string): any[] {
//         // Ejecutar query
//         return [];
//     }
// }

// class ProductService {
//     constructor(private db: IDatabase) {}

//     public save(product: any): void {
//         // Guardar producto
//         this.db.query('...');
//     }
// }


// *? Ejercicio Final

// interface IDescuento {
//   aplicar(precio: number): number;
// }

// class DescuentoFijo implements IDescuento {
//   constructor(private descuento: number) {}

//   aplicar(precio: number): number {
//     return precio - this.descuento;
//   }
// }

// interface IProducto {
//   obtenerNombre(): string;
//   obtenerPrecio(): number;
// }

// class Producto implements IProducto {
//   constructor(private nombre: string, private precio: number) {}

//   obtenerNombre(): string {
//     return this.nombre;
//   }

//   obtenerPrecio(): number {
//     return this.precio;
//   }
// }

// class Tienda {
//   private productos: IProducto[] = [];

//   agregarProducto(producto: IProducto) {
//     this.productos.push(producto);
//   }

//   listarProductos() {
//     for (const producto of this.productos) {
//       console.log(
//         `Producto: ${producto.obtenerNombre()}, Precio: $${producto.obtenerPrecio()}`
//       );
//     }
//   }

//   calcularTotal(): number {
//     return this.productos.reduce(
//       (total, producto) => total + producto.obtenerPrecio(),
//       0
//     );
//   }

//   aplicarDescuento(descuento: IDescuento) {
//     for (const producto of this.productos) {
//       const precioConDescuento = descuento.aplicar(producto.obtenerPrecio());
//       console.log(
//         `Producto: ${producto.obtenerNombre()}, Precio con descuento: $${precioConDescuento}`
//       );
//     }
//   }
// }
