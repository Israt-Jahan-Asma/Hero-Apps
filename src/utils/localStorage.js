
export const loadAppList = () => {
  try {
    const data = localStorage.getItem('Installed');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const updateAppList = (app) => {
  try {
    const appList = loadAppList(); 

    const isDuplicate = appList.some(existingApp => existingApp.id === app.id);
    if (isDuplicate) {
      console.log('Already installed');
      return appList; 
    }

    const updatedList = [...appList, app];
    localStorage.setItem('Installed', JSON.stringify(updatedList));
    return updatedList;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const saveAppList = (appList) => {
  try {
    localStorage.setItem('Installed', JSON.stringify(appList));
    return appList;
  } catch (err) {
    console.log(err);
    return [];
  }
};
