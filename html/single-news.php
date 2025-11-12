<?php get_header(); ?>

<?php
$post_d_image       = get_field('post_desktop_image');
$default_post_image = get_field('post_default_desktop_image', 'category_13');
$post_desktop_image = $post_d_image ? $post_d_image : $default_post_image;
$post_m_image       = get_field('post_mobile_image');
$post_mobile_image = $post_m_image ? $post_m_image : $post_desktop_image;
$gen_short_intro_sub_heading    = get_field('gen_short_intro_sub_heading');
$gen_short_intro_heading        = get_field('gen_short_intro_heading');
$default_editor_heading       = get_field('default_editor_heading');
$ideascategories1 = get_the_category();
?>

    <section class="perspectives-banner-section relative">
    <?php if(!empty($post_desktop_image)){  ?>
      <div class="perspectives-banner-bg background-bg">
        <picture class="object-fit">
          <source srcset="<?php echo $post_desktop_image['url']; ?>" media="(min-width:760px)">
          <img src="<?php echo $post_mobile_image['url']; ?>" alt="<?php echo $post_mobile_image['alt']; ?>"
            title="perspectives-banner-mobile">
        </picture>
        <div class="perspectives-banner-gradient background-text"></div>
      </div>
    <?php } ?>
      <div class="container">
        <div class="perspectives-banner-main flex">
          <div class="perspectives-banner-text inverted" data-animate="fade-in-up">
            <ul class="perspectives-category flex flex-vcenter m-0 no-disc heading-font">
                <?php
                      if( $ideascategories1 ):
                          $resultstr = array();
                          foreach( $ideascategories1 as $breadcrumb_category ):
                          $exclude_breadcrumb_arr = array(1,4);
                          
                          if(!in_array($breadcrumb_category->term_id,$exclude_breadcrumb_arr)){
                              $breadcrumb_cat_title = $breadcrumb_category->name;
                              $breadcrumb_catid = $breadcrumb_category->term_id;
                              $resultstr[] = '<li class="mb-0 fs-14 f-500 lh-18 txt-upper"><a href="' . esc_url( get_category_link( $breadcrumb_catid ) ) . '">'.$breadcrumb_cat_title.'</a></li>';
                          } 
                          endforeach;
                          echo implode(" ",$resultstr);
                      endif;
                  ?>
              <li class="mb-0 fs-14 f-500 lh-18 txt-upper"><?php echo strtoupper(get_the_date('M d, Y')); ?></li>
            </ul>
            <h1 class="f-700 h2"><?php echo get_the_title(); ?><span>.</span></h1>


          </div>
        </div>
      </div>
    </section>
<?php if(!empty($gen_short_intro_heading || $gen_short_intro_heading)){  ?>
    <section class="short-intro-section elevated-bg">
      <div class="container">
        <div class="short-intro-main" data-animate="fade-in-up">
            <?php if(!empty($gen_short_intro_heading)){  ?>
                <span class="optional-text"><?php echo $gen_short_intro_sub_heading; ?></span>
            <?php } if(!empty($gen_short_intro_heading)){  ?>
                <h2><?php echo $gen_short_intro_heading; ?></h2>
            <?php } ?>
        </div>
      </div>
    </section>
<?php } ?>

<?php if (have_rows('gen_features')) { ?>
<section class="featured-section elevated-bg">
    <div class="container">
        <div class="featured-main">
            <div class="featured-lists flex">
                <?php 
                $delay = 1000; 
                    $delay_step = 500; 
                    $i = 0;
                while (have_rows('gen_features')) { the_row(); 
                    $icon = get_sub_field('gen_features_icon');
                    $heading = get_sub_field('gen_features_heading');
                    $description = get_sub_field('gen_features_description');
                    $link_text = get_sub_field('gen_features_link_text');
                    $link = get_sub_field('gen_features_link');
                    if(!empty($heading || $description)){
                      $current_delay = $delay + ($i * $delay_step);
                ?>
                <div class="featured-list" data-animate="fade-in-up" data-delay="<?php echo $current_delay; ?>">
                    <?php if (!empty($icon)) { ?>
                    <div class="feature-icon" data-animate="fade-in-up">
                        <figure class="object-fit">
                            <img src="<?php echo $icon['url']; ?>" alt="<?php echo $icon['alt']; ?>">
                        </figure>
                    </div>
                    <?php } ?>

                    <div class="featured-text fs-16 lh-24">
                        <?php if (!empty($heading)) { ?>
                            <h2 class="h4"><?php echo $heading; ?></h2>
                        <?php } ?>

                        <?php if (!empty($description)) { ?>
                            <?php echo $description; ?>
                        <?php } ?>

                        <?php if (!empty($link_text) && !empty($link)) { ?>
                            <a href="<?php echo $link; ?>" class="text-link flex flex-vcenter">
                                <span><?php echo $link_text; ?></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M9.80994 6.59866C10.0634 6.81271 10.0634 7.18729 9.80994 7.40134L6.06725 10.8261C5.83333 11.058 5.42398 11.058 5.19006 10.8261C4.93665 10.612 4.93665 10.2375 5.19006 10.0234L8.48441 6.99108L5.19006 3.97659C4.93665 3.76254 4.93665 3.38796 5.19006 3.17391C5.42398 2.94203 5.83333 2.94203 6.06725 3.17391L9.80994 6.59866Z"
                                  fill="#D0009E" />
                              </svg></span>
                            </a>
                        <?php } ?>
                    </div>
                </div>
                <?php $i++; } } wp_reset_postdata(); ?>
            </div>
        </div>
    </div>
</section>
<?php } ?>

    <section class="perspective-default ">
      <div class="container x-sm">
        <div class="perspective-default-main">
        <?php if (!empty($default_editor_heading)) { ?> 
          <div class="h3"><?php echo $default_editor_heading; ?></div>
        <?php } ?>
            <?php
                while ( have_posts() ) : the_post();
                    the_content();
                endwhile;
            ?>
          <!-- ShareThis BEGIN -->

          <div class="share-icon-main flex elevated-bg">
            <div class="share-wrap flex flex-vcenter">
              <div class="share-icon">
                <i class="fa-light fa-share-nodes"></i>
              </div>
              <div class="h4">Share this content</div>
            </div>
            <div class="share-icons">
              <div class="sharethis-inline-share-buttons"></div><!-- ShareThis END -->
            </div>
          </div>
        </div>

      </div>
    </section>
    <section class="divider-section">
      <div class="container">
        <div class="divider flex no-wrap">
          <span class="dot radius-50 transition-out"></span>
          <span class="dot radius-50 transition-out"></span>
          <span class="dot radius-50 transition-out"></span>
          <span class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 "></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span><span
            class="dot radius-50 transition-out"></span><span class="dot radius-50 transition-out"></span>
        </div>
      </div>
    </section>
<?php echo related_perspectives(); ?>

<?php get_footer(); ?>