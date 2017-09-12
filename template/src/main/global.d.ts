// global path to `static/` directory
declare namespace NodeJS {
  export interface Global {
    __static: string
  }
}

