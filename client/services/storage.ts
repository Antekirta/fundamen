class Storage {
  // INFO: Just to avoid errors in the server side rendering
  storage : any = {
    setItem: () => {},
    getItem: () => { return '' }
  }

  constructor () {
    if (process.client) {
      this.storage = window.localStorage
    }
  }

  set (key, value) {
    this.storage.setItem(key, value)
  }

  get (key) {
    return this.storage.getItem(key)
  }
}

export const STORAGE_KEYS = {

}

export const storage = new Storage()
