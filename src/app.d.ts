declare namespace App{
    interface Locals{
        pb: import ('pocketbase').default;
        user?: import('pocketbase').Record | import('pocketbase').Admin;
    }
    //interface PageData{}
    //interface Platform{}
}