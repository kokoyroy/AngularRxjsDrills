import { Observable } from "rxjs"

export function createHttpObservable(url: string){
    return new Observable(observer => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          observer.next(data)
          observer.complete()
        })
        .catch(err => observer.error(err))
    })
  }

