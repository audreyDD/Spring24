use std::env;
fn main() {
    let args: Vec<String> = env::args().collect();
    let num1 = &args[1];
    let operator = &args[2];
    let num2 = &args[3];

    println!("You entered: {} {} {}", num1, operator, num2);

    let num1 = num1.parse::<i32>().unwrap();
    let num2 = num2.parse::<i32>().unwrap();

    let ans = calculate(&operator, &num1, &num2);
    println!("Your answer is {}", ans)
}

fn calculate(op: &str, n1: &i32, n2: &i32) -> i32 {
    match op {
        "+" => return n1 + n2,
        "-" => return n1 - n2,
        "x" => return n1 * n2,
        "/" => return n1 / n2,
        _ => panic!("Not a valid operator!")
    };
}

mod tests {
    use super::*;

    #[test]
    fn add() {
        let result = calculate("+", &2, &2);
        assert_eq!(result, 4);
    }

    #[test]
    fn sub() {
        let result = calculate("-", &5, &2);
        assert_eq!(result, 3);
    }

    #[test]
    fn mult() {
        let result = calculate("x", &9, &2);
        assert_eq!(result, 18);
    }

    #[test]
    fn div() {
        let result = calculate("/", &64, &16);
        assert_eq!(result, 4);
    }

    #[test]
    #[should_panic(expected = "Not a valid operator!")]
    fn bad_op() {
        calculate("p", &2, &2);
    }

    #[test]
    #[should_panic]
    fn div_by_zero() {
        calculate("/", &2, &0);
    }

}