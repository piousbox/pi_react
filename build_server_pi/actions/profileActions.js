"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var profileAction = function profileAction() {};
/*  return (dispatch, getState) => {
    if (localStorage.getItem('fbAccount')) {
      let fbAccount = JSON.parse(localStorage.getItem('fbAccount'))
      fetch(TgmApi.profile, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: localStorage.getItem('fbAccount'),
      }).then(r => r.json()).then(_data => {
        fbAccount = Object.assign({}, fbAccount, _data)
        dispatch({ type: SET_PROFILE, fbAccount: fbAccount })
      })
    }
    dispatch({ type: SET_PROFILE, fbAccount: null })
  }
} // */

var loginAction = function loginAction(r2) {};
/*  return (dispatch, getState) => {
    localStorage.setItem('fbAccount', JSON.stringify(r2))
    dispatch(profileAction())
  }
} // */

var logoutAction = function logoutAction() {};
/*  localStorage.removeItem('fbAccount')
  return({ type: SET_PROFILE, fbAccount: null }) 
} // */

exports.default = {
  profileAction: profileAction, loginAction: loginAction, logoutAction: logoutAction
};
//# sourceMappingURL=profileActions.js.map