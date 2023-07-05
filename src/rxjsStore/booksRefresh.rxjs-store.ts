/** Rxjs */
import { BehaviorSubject } from "rxjs";

/** UUID */
import { v4 as uuidv4 } from "uuid";

const booksRefreshTrigger$ = new BehaviorSubject(uuidv4());

const triggerBooksRefresh = () => booksRefreshTrigger$.next(uuidv4());

export { booksRefreshTrigger$, triggerBooksRefresh };
