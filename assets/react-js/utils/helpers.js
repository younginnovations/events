export let Loader = {
    show(reference) {
        if ($(reference).find('#loader').length === 0) {
            $(reference).append(
                `<div id="loader">
                <div class="cube-grid">
                    <div class="cube cube1"></div>
                    <div class="cube cube2"></div>
                    <div class="cube cube3"></div>
                    <div class="cube cube4"></div>
                    <div class="cube cube5"></div>
                    <div class="cube cube6"></div>
                    <div class="cube cube7"></div>
                    <div class="cube cube8"></div>
                    <div class="cube cube9"></div>
                </div>
            </div>`
            );
        }
    },

    remove(reference) {
        $(reference)
            .find('#loader')
            .fadeOut('slow', function () {
                $(this).remove();
            });
    }
};

export function HideElementWithEmptyData(data) {
    if (!data) {
        return 'hide';
    }else return 'show';
}