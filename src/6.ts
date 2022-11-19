// タグ付きユニオンの練習

type Some<T> = {
  tag: "some";
  value: T;
}

type None = {
  tag: "none";
}

type Option<T> = Some<T> | None

function isSome<T>(obj: Option<T>): obj is Some<T> {
  return obj.tag === "some";
}

function showNumberIfExists(obj: Option<number>): void {
  if (isSome(obj)) {
    console.log(obj.value);
  }
}
const four: Option<number> = {
  tag: "some",
  value: 4,
};

const nothing: Option<number> = {
  tag: "none",
};

showNumberIfExists(four);
showNumberIfExists(nothing);

function mapOption<T,U>(obj: Option<T>, callback: (value: T) => U): Option<U>{
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: callback(obj.value)
      }
    case "none":
      return {
        tag: "none"
      }
  }
}

function doubleOption(obj: Option<number>) {
  return mapOption(obj, x => x * 2)
}

console.log(doubleOption(four))
console.log(doubleOption(nothing))
