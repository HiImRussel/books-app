/** Rxjs */
import { BehaviorSubject } from "rxjs";

/** UUID */
import { v4 as uuidv4 } from "uuid";

const usersRefreshTrigger$ = new BehaviorSubject(uuidv4());

const triggerUsersRefresh = () => usersRefreshTrigger$.next(uuidv4());

export { usersRefreshTrigger$, triggerUsersRefresh };
