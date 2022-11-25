import axios from "axios";

export const createItemAsync = data => {
  return async dispatch => {
    let config;
    if (data.type === "file") {
      let percentCompleted;
      config = {
        onUploadProgress: progressEvent => {
          percentCompleted = Math.floor(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          // dispatch(setProgress(percentCompleted));
        },
        headers: data.headers
      };
    } else {
      config = {
        headers: data.headers
      };
    }
    const onSuccess = success => {
      data.loginHeader
        ? dispatch({
            type: data.successType,
            payload: {
              token: success.headers["x-access-token"]
            }
          })
        : dispatch({ type: data.successType, payload: success.data });

      !data.noReload && dispatch(data.finishedReload());
      return success;
    };
    const onError = error => {
      dispatch({ type: data.errorType });
      !data.noReload && dispatch(data.finishedReload());
      return error;
    };
    try {
      !data.noReload && dispatch(data.startReload());
      const success = await axios.post(data.url, data.formData, config);
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
};
