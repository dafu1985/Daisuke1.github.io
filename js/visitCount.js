<!-- �K��҃J�E���g�p�̃X�N���v�g -->
<script>
    //�J�E���g�����[�J���X�g���[�W����擾
    let visitCount = localStorage.getItem('visitCount');

    //�J�E���g�����݂��Ȃ��ꍇ�͏�����
    if(visitCount === null) {
       visitCount = 0 ;
    } else {
    //�����񂩂琔�l�ɕϊ�
       visitCount = parseInt(visitCount);
    }

    //�J�E���g�𑝂₷
    visitCount++ ;
    
    //�J�E���g�����[�J���X�g���[�W�ɕۑ�
    localStorage.setItem('visitCount', visitCount);
    
    //�J�E���g��HTML�ɕ\��
    document.getElementById('visitCount').textContent = visitCount;
 </script>
