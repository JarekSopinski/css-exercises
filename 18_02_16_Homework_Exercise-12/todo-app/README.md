Zadanie domowe nr 12
==

**0.**

Korzystają z create-react-app stwórz nową aplikację.

**1.**

Stwórz aplikację (komponent `<App/>`), która w swoim stanie będzie przechowywać tablicę zadań (w postaci `{name: 'Todo 1', isFinished: false}`) - **hint**: tablica zadań może znajdować się w `this.state.todos`, czyli `state = {todos: [...]}`

Stwórz komponent `<Todo />`, który będzie wyświetlał zadanie przekazane przez propsy (niech po prostu renderuje nazwę zadania i przekreśla ją, jeśli `isFinished === true`).

Zainicjalizuj stan aplikacji listą kilku zadań.

Wyświetl listę zadań ze stanu aplikacji korzystają z komponentu Todo i metody `map` (dla uproszczenia, użyj indeksu z tablicy jako `key`, albo zignoruj warning Reacta)

**2.**

Dodaj do aplikacji komponent `<AddTodo>`, który składa się z `<input type="text"/>` i przycisku `Add`.

Niech komponent AddTodo przechowuje w swoim stanie aktualną wartość inputa 
(użyj callbacka `onChange`, poniżej przykład jak dostać się do aktualnej wartości)
```
<input type="text" onChange={(e) => console.log(`Current value is ${e.target.value}`)}/>
```

Dodaj do komponentu `<AddTodo>` prop `onAdded`, który przyjmuje callback.

Niech komponent `<AddTodo>` wywoła otrzymany (przez prop) callback po kliknięciu przycisku `Add` z aktualną wartościa inputa ze stanu.

W efekcie wywołania `onAdded` przez `<AddTodo>` niech aplikacja dodaje nowy todo do stanu (przy pomocy `setState`).

**hint** ze względu na to, że wartości w stanie nie modyfikujemy, a nadajemy im nowe wartości przy pomocy setState, 
należy w ostanim kroku stworzyć nową tablicę na podstawie poprzedniej - `const newTodosTable = [...this.state.todos, newTodo]`. 
Operator `...` to tzw. spread operator przydatny przy kopiowaniu tablic i obiektów. Więcej informacji: https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/Spread_operator
