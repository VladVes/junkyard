function fn(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }
  return x.toLowerCase();
}

class MyResponse {
  header = 'response header';
  result = 'response result';
}
class MyError {
  errHeader = 'error header';
  message = 'error result';
}

function handel(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return { info: res.header + res.result };
  } else {
    return { info: res.errHeader + res.message };
  }
}