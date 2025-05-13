document.getElementById('resume-form').addEventListener('submit', function(e) {
  e.preventDefault(); // 阻止表单默认提交行为

  // 获取表单字段
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const position = document.getElementById('position').value;
  const resume = document.getElementById('resume').files[0];

  // 模拟上传过程（这里可以改为实际的 AJAX 提交）
  const formSection = document.getElementById('form');
  const successSection = document.getElementById('success');
  const button = document.querySelector('button');
  
  // 禁用按钮并更改文本
  button.disabled = true;
  button.textContent = '上传中...';

  // 模拟延迟（比如 AJAX 请求的时间）
  setTimeout(() => {
    // 假设上传成功后，隐藏表单并显示成功信息
    formSection.style.display = 'none';
    successSection.style.display = 'block';
    
    // 恢复按钮
    button.disabled = false;
    button.textContent = '提交简历';
  }, 2000);  // 2秒钟模拟上传过程
});
