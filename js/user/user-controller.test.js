const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

// Tarea 2: prueba add() - verificar usuario que NO esta en la lista
test('add user that is not already in the list', () => {
    let controller = new UserController();
    let user = new User(5555, "Maria", "maria@generation.org");
    expect(controller.getUsers()).not.toContain(user);
    controller.add(user);
    expect(controller.getUsers()).toContain(user);
});

// Tarea 2: prueba remove() - verificar usuario que NO esta en la lista
test('remove user that is not in the list does not affect the list', () => {
    let controller = new UserController();
    let user1 = new User(1111, "Carlos", "carlos@generation.org");
    let user2 = new User(2222, "Ana", "ana@generation.org");
    controller.add(user1);
    controller.remove(user2);
    expect(controller.getUsers().length).toBe(1);
    expect(controller.getUsers()).toContain(user1);
});

// Tarea 2: 2 pruebas para findByEmail()
test('findByEmail returns the correct user', () => {
    let controller = new UserController();
    let user = new User(3333, "Pedro", "pedro@generation.org");
    controller.add(user);
    expect(controller.findByEmail("pedro@generation.org")).toBe(user);
});

test('findByEmail returns undefined when email not found', () => {
    let controller = new UserController();
    let user = new User(3333, "Pedro", "pedro@generation.org");
    controller.add(user);
    expect(controller.findByEmail("noexiste@generation.org")).toBeUndefined();
});

// Tarea 2: 2 pruebas para findById()
test('findById returns the correct user', () => {
    let controller = new UserController();
    let user = new User(4444, "Laura", "laura@generation.org");
    controller.add(user);
    expect(controller.findById(4444)).toBe(user);
});

test('findById returns undefined when id not found', () => {
    let controller = new UserController();
    let user = new User(4444, "Laura", "laura@generation.org");
    controller.add(user);
    expect(controller.findById(9999)).toBeUndefined();
});
