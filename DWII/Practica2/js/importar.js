<script>
    document.addEventListener("DOMContentLoaded", function() {
        
        const modalElemento = document.getElementById('modalGaleria');
        const imagenModal = document.getElementById('imagenModal');
        
        modalElemento.addEventListener('show.bs.modal', function(evento) {
            const botonTrigger = evento.relatedTarget;
            
            const imgTarget = botonTrigger.querySelector('img');
            
            if (imgTarget) {
                const rutaImagen = imgTarget.getAttribute('src');
                
                imagenModal.setAttribute('src', rutaImagen);
            }
        });
        
        modalElemento.addEventListener('hidden.bs.modal', function() {
            imagenModal.setAttribute('src', '');
        });
    });
</script>


<div class="modal fade" id="modalGaleria" tabindex="-1" aria-labelledby="modalGaleriaLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-transparent border-0">
            <div class="modal-body p-0 position-relative text-center">
                <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3" data-bs-dismiss="modal" aria-label="Close"></button>
                
                <img src="" id="imagenModal" class="img-fluid rounded shadow-lg image-zoom-effect" alt="Zoom de Portafolio">
            </div>
        </div>
    </div>
</div>