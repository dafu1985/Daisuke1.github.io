<!-- �K��҃J�E���g�p�̃X�N���v�g -->
<script>
console.log('Script loaded');

    //�J�E���g�����[�J���X�g���[�W����擾
    let visitCount = localStorage.getItem('visitCount');
    
    console.log('Visit count from local storage:', visitCount);

    //�J�E���g�����݂��Ȃ��ꍇ�͏�����
    if(visitCount === null) {
       visitCount = 0 ;
    } else {
    //�����񂩂琔�l�ɕϊ�
       visitCount = parseInt(visitCount);
    }

console.log('Visit count before:', visitCount);

// �J�E���g�𑝂₷
visitCount++;

console.log('Visit count after increment:', visitCount);

// �J�E���g�����[�J���X�g���[�W�ɕۑ�
localStorage.setItem('visitCount', visitCount);

console.log('Visit count after saving to localStorage:', visitCount);

// �J�E���g��HTML�ɕ\��
document.getElementById('visitCount').textContent = visitCount;

console.log('Visit count after updating HTML:', visitCount);

 </script>
