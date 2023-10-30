
// public class Validator {
//   public final Map<String, List<String>> errors = new HashMap<>();

//   public void addError(String attribute, String message) {
//       if(!errors.containsKey(attribute)) {
//           errors.put(attribute, new ArrayList<>());
//       }
//       errors.get(attribute).add(message);
//   }

//   public void hasMin(String attribute, String value, Integer length, String message) {
//       if(value != null && (value.length() < length)) {
//           addError(attribute, message);
//       }
//   }

//   public void hasMax(String attribute, String value, Integer length, String message) {
//       if(value.length() > length) {
//           addError(attribute, message);
//       }
//   }

//   public void isRequired(String attribute, String value) {
//       if(Objects.isNull(value) || value.isEmpty()) {
//           addError(attribute, "attribute " + attribute.toLowerCase() + " is required");
//       }
//   }

//   public void isValidEmail(String attribute, String email) {
//       final String pattern = "^(.+)@(\\S+)$";

//       if(email != null ) {
//           var isValid = Pattern.compile(pattern)
//                   .matcher(email)
//                   .matches();

//           if(!isValid) {
//               addError(attribute, "attribute email is not valid");
//           }
//       }
//   }

//   public void nonNull(String attribute, Object value) {
//       if (value != null) {
//           addError(attribute, "attribute " + attribute.toLowerCase() + " most be null");
//       }
//   }

//   public void isNull(String attribute, Object value, String message) {
//       if (value == null) {
//           addError(attribute, message);
//       }
//   }

//   public Boolean validate() {
//       return errors.isEmpty();
//   }

//   public List<String> getErrorsByAttribute(String attribute) {
//       return errors.getOrDefault(attribute, new ArrayList<>());
//   }

//   public Map<String, List<String>> getAllErrors() {
//       return errors;
//   }

//   public void clearErrors() {
//       errors.clear();
//   }
// }