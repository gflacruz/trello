interface Board {
    columns: Map<TypedColumn, Column>
}

interface Column {
    id: TypedColumn,
    todos: Todo[]
}

type TypedColumn = "todo" | 'inprogress' | 'done'

interface Todo {
    $id: string;
    $createdAT: string;
    title: string;
    status: TypedColumn;
    image?: string;
}

interface Image {
    bucketId: string;
    fileId: string;
}