import { ActionReducerMap } from "@ngrx/store";
import { authFeatureKey, State as authState, reducer as authReducer } from "../features/auth/store/auth.reducer";
//import { studentFeatureKey, State as studentsState, reducer as studentsReducer } from "../features/dashboard/students-table/store/student.reducer";
//import { classFeatureKey, State as classesState, reducer as classesReducer } from "../features/dashboard/class-assignment/store/class.reducer";

interface RootState {
  [authFeatureKey]: authState,
  //[studentFeatureKey]: studentsState,
  //[classFeatureKey]: classesState,
}

const RootReducer: ActionReducerMap<RootState> = {
  [authFeatureKey]: authReducer,
  //[studentFeatureKey]: studentsReducer,
  //[classFeatureKey]: classesReducer,
}

export { RootReducer }
