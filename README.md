# Effect Creator nên biết

    . takeEvery : chạy saga mỗi lần khi có action đc dispatch, dispatch bao nhiêu sẽ chạy bấy nhiêu saga

    . takeLatest : chạy saga, nhưng khi có action mới đc dispatch, thì cái saga trc sẽ bị cancel

    . takeLeading : chạy saga khi action đc dispatch, những action tiếp theo sẽ bị cancel cho đến khi saga trc đó chạy xong

    . put(action) : hàm dùng để dispatch của saga

    . call(fn, ...args) : dùng để gọi hàm API, Promise, ... - fn là hàm đc gọi & args là tham số truyền vào hàm đó

    . all([...effects]) : gọi 1 lúc tất cả các effect

    . take(pattern) and fork(fn, ...args) : đợi dispatch 1 cái action PATTERN(take) thì sẽ thực hiện(fork) 1 cái task nào đó

    . throttle(ms, pattern, saga, ...args) : throttle cái action PATTERN, đảm bảo cái action này chỉ đc thực hiện 1 lần trong khoảng tg ...ms

    . debounce(ms, pattern, saga, ...args) : ngược lại với throttle, sẽ đợi trong khoảng tg ...ms xem có action nào ko, nếu ko thì nó mới chạy saga

    . retry(maxTries, delay, fn, ...args) : cố gắng gọi lại hàm fn nếu failed, sau mỗi lần delay ms và tối đa chỉ thử maxTries

    . note :
            . fn là hàm
            . patern là action
            . args là tham số truyền vào hàm đó
            . maxTries là tối đa số lần thử
