import static org.junit.jupiter.api.Assertions.assertEquals;

class Q3tests {

  @Test
  void basicTest(){
    String str = "()";
    assertEquals();
  }

  @Test
  void basicFail(){
    String str = ")";
  }

  @Test
  void checkIterations(){
    String str = "(()()()(()))";
  }

  @Test
  void noParenthesis(){
    String str = "justtext";
  }

  @Test
  void withText(){
    String str = "(because(I)can(lol))";
  }
}
