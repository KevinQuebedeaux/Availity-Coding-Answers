import java.util.*;

public class Q3 {

  public static boolean checkParenthesis(String string){
    // Split string into characters
    char[] digits = string.toCharArray();
    //System.out.println(digits);
    int openPara = 0;
    int closePara = 0;
    //loop through the char[]. iterate if '(' or ')' is found
    for(int i = 0; i < string.length(); i++ ){
      if (digits[i] == '('){
        openPara++;
      } else if (digits[i] == ')'){
        closePara++;
      }
      // if at any point there are more ')' than '(', test immediately fails
      if(closePara > openPara){
        return false;
      }
    }
    // Check at the end to see if the number of '(' and ')' match.
    // Fails if they don't
    if(openPara == closePara){
      return true;
    } else {
      return false;
    }
  }

  public static void main(String[] args){
    String str = "(test)";
    System.out.println("test 1: " + checkParenthesis(str));

    String str2 = ")";
    System.out.println("test 2: " + checkParenthesis(str2));

    String str3 = "(()()()(()))";
    System.out.println("test 3: " + checkParenthesis(str3));

    String str4 = "(because(I)can(lol))";
    System.out.println("test 4: " + checkParenthesis(str4));

    String str5 = "justtext";
    System.out.println("test 5: " + checkParenthesis(str5));

    String str6 = "((())))";
    System.out.println("test 6: " + checkParenthesis(str6));

  }

}
