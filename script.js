function wireEnquiryForm(formId, whatsappNumber, concernLabel) {
  var form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var lines = [
      "Hi Gurvardan, I'd like to enquire.",
      'Name: ' + (data.get('name') || ''),
      'Phone: ' + (data.get('phone') || ''),
      concernLabel + ': ' + (data.get('concern') || ''),
    ];
    var message = data.get('message');
    if (message) lines.push('Message: ' + message);
    var url = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank', 'noopener');
  });
}
