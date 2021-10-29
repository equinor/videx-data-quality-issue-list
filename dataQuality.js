/**
 * 
 * @param {*} issue - issue object without injected attributes
 * @param {*} options - attributes to be injected in the message
 * @returns transformed data issue
 */
export function transformIssue(issue, options = {}) {
  const attributes = Object.keys(options);

  let message = issue?.message;
  let resourceUuid = issue?.resourceUuid;
  let shortDescription = issue?.shortDescription;
  attributes.map(attribute => {
    message = message?.replace(`\${${attribute}}`, options[attribute]);
    shortDescription = shortDescription?.replace(`\${${attribute}}`, options[attribute]);
    resourceUuid = resourceUuid?.replace(`${attribute}`, options[attribute]);
  });

  return {
    ...issue,
    message,
    resourceUuid,
    shortDescription,
  };
}
