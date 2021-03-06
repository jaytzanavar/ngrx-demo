import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {zipcodeReducer, ZipcodeState} from './zip-codes.reducer';
import {currentConditionsReducer, CurrentConditionsState} from './current-conditions.reducer';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {forecastReducer, ForecastState} from './forecast.reducer';

export interface State {
  zipcodes: ZipcodeState,
  currentConditions: CurrentConditionsState
  router: RouterReducerState,
  forecast: ForecastState
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer,
  currentConditions: currentConditionsReducer,
  router: routerReducer,
  forecast: forecastReducer
};


// selector function to get portions of our state

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectZipcodeState = (state: State) => state.zipcodes; //gets the global state of our app returns state we are in to it

export const selectZipcodeList = createSelector(selectZipcodeState, (state: ZipcodeState) => state.zipcodes); //takes function as parameter and then define wich data we are interested in

export const selectCurrentConditionsState = (state: State) => state.currentConditions;

export const selectCurrentConditionsList = createSelector(selectCurrentConditionsState, (state: CurrentConditionsState) => state.currentConditions);

export const selectForecastState = (state: State) => state.forecast;

export const selectForecast = createSelector(selectForecastState,
    (state: ForecastState) => state.forecast);